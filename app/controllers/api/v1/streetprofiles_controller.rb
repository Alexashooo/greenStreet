module Api
  module V1

      class StreetprofilesController < ApplicationController

          def index
              @streetprofiles = Streetprofile.all
              render json: @streetprofiles, status: 200
          end


          def show
            @streetprofile = Streetprofile.find(params[:id])
            render json: @streetprofile, status: 200
          end


          def update
            @streetprofile = Streetprofile.find(params[:id])
            @streetprofile.update_attributes(greenstreet_params)

            respond_to do |format|
              if
                format.json { render json: @streetprofile.errors, status: :unprocessable_entity}
              end
            end
          end


          def create
            @streetprofile = Streetprofile.new
            @streetprofile.name = params[:name]
            @streetprofile.street_configuration = params[:street_configuration]
            @streetprofile.user_id = params[:user_id]


            if @streetprofile.save!
              render json: @streetprofile , status: 201
            else
              render json: {error: "Street profile is invalid", status: 400}, status: 400
            end
          end


          def destroy
            @streetprofile = Streetprofile.find(params[:id])
            @streetprofile.destroy

            respond_to do |format|
              format.json {head :ok}
            end
          end


      end

    end
end
