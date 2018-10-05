class MoviesController < ApplicationController
  before_action :set_movie, only: [:show, :update, :destroy, :add, :movie_rating]

  # GET /movies
  def index
    # @movies = Movie.all
    # binding.remote_pry
    @movies = []
    if current_user
      user_ratings = UserMovieRating.where(user_id: current_user.id)
      Movie.all.map do |movie|
        if movie.user_review(current_user.id).length > 0
          @movies.push({movie: movie, user_review: movie.user_review(current_user.id)[0].rating})
        else
          @movies.push({movie: movie})
        end
      end
    else
      @movies = Movie.all
    end
    render json: @movies
    # render json: @movies, include: :user_movie_ratings
  end

  # GET /movies/1
  def show
    user_rating = UserMovieRating.where(user_id: current_user.id, movie_id: @movie.id)
    render json: {movie: @movie, user_review: user_rating}
  end

  # GET /movie/search
  def search
    # binding.remote_pry
    movies = []
    query = params[:q]
    @movies = Movie.ransack(title_cont: query).result(distinct: true).limit(5)
    @movies.map do |movie|
      user_rating = UserMovieRating.where(user_id: current_user.id, movie_id: movie.id).first
      movies.push({movie: movie, user_review: user_rating})
    end
    render json: movies
    # render json: @movies
    # @movie = Movie.find_by(title: query)
    # if @movie
    #   user_rating = UserMovieRating.where(user_id: current_user.id, movie_id: @movie.id)
    #   render json: movies.push({movie: @movie, user_review: user_rating})
    # else
    #   user_ratings = UserMovieRating.where(user_id: current_user.id)
    #   Movie.all.map do |movie|
    #     if movie.user_review(current_user.id).length > 0
    #       movies.push({movie: movie, user_review: movie.user_review(current_user.id)[0].rating})
    #     else
    #       movies.push({movie: movie})
    #     end
    #   end
    #   render json: movies
    # end
  end

  # POST /movies
  def create
    @movie = Movie.new(movie_params)

    if @movie.save
      render json: @movie, status: :created, location: @movie
    else
      render json: @movie.errors, status: :unprocessable_entity
    end
  end

  # add_to_list /add_movie/:id
  def add
    # Rails.logger.debug params[:list]
    list = List.find(params[:list][:id])
    if @movie.lists.where("list_id = ?", list.id).length == 0
      @movie.lists << list
    end
    render json: @movie, include: :lists
  end

  #POST /movie_rating/:id
  def movie_rating
    # binding.remote_pry
    user = current_user
    @review = UserMovieRating.where(movie_id: @movie.id, user_id: current_user.id).first_or_create
    @review.rating = movie_params[:rating]
    # Rails.logger.debug review
    if @review.save
      render json: @movie
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /movies/1
  def update
    if @movie.update(movie_params)
      render json: @movie
    else
      render json: @movie.errors, status: :unprocessable_entity
    end
  end

  # DELETE /movies/1
  def destroy
    @movie.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_movie
      @movie = Movie.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def movie_params
      params.require(:movie).permit(:title, :genre, :list, :rating)
    end
end
