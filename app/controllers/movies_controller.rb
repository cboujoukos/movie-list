class MoviesController < ApplicationController
  before_action :set_movie, only: [:show, :update, :destroy, :add]

  # GET /movies
  def index
    @movies = Movie.all

    render json: @movies
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
      params.require(:movie).permit(:title, :genre, :list)
    end
end
