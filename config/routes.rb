Rails.application.routes.draw do
  scope '/api' do
    resources :lists
    resources :movies
    post '/add_movie/:id' => 'movies#add'
    post '/new_list_with_movie/:id' => 'lists#create_with_movie'
    post 'user_token' => 'user_token#create'
    post '/users' => 'users#create'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
