Rails.application.routes.draw do

  devise_for :users
  resources :streetprofiles, only: [:index, :show, :create, :update]

  get '*path' => 'application#index'

  root to:'application#index'


end
