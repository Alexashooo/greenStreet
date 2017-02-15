Rails.application.routes.draw do

  devise_for :users


  resources :streetprofiles

  namespace :api do
    namespace :v1 do
      resources :streetprofiles, only: [:index, :show, :create, :update]
    end
  end


  get '*path' => 'application#index'

  root to:'application#index'


end
