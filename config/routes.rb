Rails.application.routes.draw do

  devise_for :users
  resources :lists

  get '/all/list/' => 'lists#getList'

  post '/list/saveList' => 'lists#create'
  post '/list/updateList' => 'lists#update'

  root 'lists#index'
end
