class ListsController < ApplicationController
  # skip_before_action :verify_authenticity_token, only: [:create]
  # before_action :authenticate_user
  before_action :set_list, only: [:show, :update, :destroy]

  # GET /lists
  def index
    if current_user
      @lists = []
      List.where(user_id: current_user.id).map do |list|
        @lists.push({list: list, list_length: list.movies.length, avg_rating: list.avg_rating(current_user)})
      end
      render json: {lists: @lists, user_id: current_user.id}
    else
      render json: {lists: [], user_id: current_user_id}
    end
    # render json: {lists: @lists}

    #Desired rsp
    # {
    #   json: {
    #     lists: [
    #       {
    #         name: 'list_1',
    #         movies: [
    #           {
    #             title: "duck soup",
    #             genre: 'fantasy'
    #           },
    #           {
    #             title: "Star Wars",
    #             genre: "scifi"
    #           }
    #         ]
    #       },
    #       {
    #         name: 'list2',
    #         movies: [
    #           {
    #             title: 'duck soup',
    #             genre: "fantasy"
    #           },
    #           {
    #             title: 'blazing saddles',
    #             genre: 'comedy'
    #           }
    #         ]
    #       }
    #     ]
    #   }
    # }
  end

  # GET /lists/1
  def show
    # render json: {list: @list, movies: @list.movies}

    # avg_rating = {avg_rating: @list.avg_rating(current_user).to_f} # Need to include avg_rating with rsp
    # render json: list # responding with an array of <UserMovieRating>

    render json: @list.to_json({:include => {:movies => {:include => :user_movie_ratings}}})
    # render json: {list: {list: @list, movies: @list.movies, avg_rating: @list.avg_rating(current_user)}}

    # list_json["avg_rating"] = avg_rating
    # binding.remote_pry
    # render json: list_json
    # @object.to_json({:include => :assocation_a, :methods => :my_method})
  end

  # POST /lists
  def create
    # raise list_params.inspect
    @list = List.new(list_params)
    @list.user = current_user

    if @list.save
      render json: @list, status: :created
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end

  # DELETE /lists/:list_id/:movie_id
  def delete_movie_from_list
    entry = ListMovie.find_by(list_id: params[:list_id], movie_id: params[:movie_id])
    entry.destroy
  end

  # POST /lists_with_movie
  def create_with_movie
    # raise list_params.inspect
    @list = List.new(list_params)
    @list.user = current_user
    @list.movies << Movie.where('id = ?', params[:id])

    if @list.save
      render json: @list, include: :movies, status: :created
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /lists/1
  def update
    if @list.update(list_params)
      render json: @list
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end

  # DELETE /lists/1
  def destroy
    @list.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_list
      @list = List.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def list_params
      params.require(:list).permit(:name)
    end
end
