class ListsController < ApplicationController
  # skip_before_action :verify_authenticity_token, only: [:create]
  # before_action :authenticate_user
  before_action :set_list, only: [:show, :update, :destroy]

  # GET /lists
  def index
    if current_user
      @lists = []
      List.where(user_id: current_user.id).map do |list|
        @lists.push({list: list, list_length: list.movies.length})
      end
      render json: @lists
    else
      render json: {lists: []}
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
    render json: @list.as_json(:include => {:movies => {:include => :user_movie_ratings}})
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
