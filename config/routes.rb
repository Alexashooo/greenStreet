Rails.application.routes.draw do

  devise_for :users


  resources :streetprofiles


  get '*path' => 'application#index'

  root to:'application#index'

end
