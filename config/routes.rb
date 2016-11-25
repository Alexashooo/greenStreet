Rails.application.routes.draw do

  #devise_for :users

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }

  resources :users

  get '*path' => 'application#index'
  root to:'application#index'

end
