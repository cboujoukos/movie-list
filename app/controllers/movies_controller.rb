class MoviesController < ApplicationController
  before_action :set_movie, only: [:show, :update, :destroy, :add, :movie_rating]

  # GET /movies
  def index
    @movies = Movie.all
    # ratings = UserMovieRating.where(user_id: current_user.id)

    render json: @movies, include: :user_movie_ratings
    # render json: {movies: @movies, ratings: ratings}
  end

  # GET /movies/1
  def show
    render json: @movie
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
    # raise movie_params
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

    # review.movie_id = @movie.id
    # review.user_id = user.id
    # binding.remote_pry
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
