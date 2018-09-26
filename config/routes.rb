Rails.application.routes.draw do
  scope '/api' do
    resources :lists
    post 'user_token' => 'user_token#create'
    post '/users' => 'users#create'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
