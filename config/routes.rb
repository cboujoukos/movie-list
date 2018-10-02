Rails.application.routes.draw do
  scope '/api' do
    resources :lists
    resources :movies
    post '/add_movie/:id' => 'movies#add'
    post '/new_list_with_movie/:id' => 'lists#create_with_movie'
    post 'user_token' => 'user_token#create'
    post '/users' => 'users#create'
    post '/movie_rating/:id' => 'movies#movie_rating'
    delete '/lists/:list_id/:movie_id' => 'lists#delete_movie_from_list'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
