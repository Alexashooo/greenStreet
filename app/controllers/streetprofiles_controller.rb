class StreetprofilesController < ApplicationController

  def index
  end

  def show
    @streetprofile = Streetprofile.find(params[:id])
    render json: @streetprofile, status: 200
  end

  def new
    @streetprofile = Streetprofile.new
  end

  def update
    @streetprofile = Streetprofile.find(params[:id])
    respond_to do |format|
      if @streetprofile.update_attributes(


        )
        format.json { render json: @streetprofile.errors, status: :unprocessable_entity}
      end
    end
  end

  def create
    @streetprofile = Streetprofile.new
    @streetprofile.name = Streetprofile.params[:streetprofile][:name]
    @streetprofile.street_configuration = Streetprofile.params[:streetprofile][:street_configuration]

   if @streetprofile.save!

    render json: @streetprofile , status: 201

   else
    render json: {error: "Street profile is invalid", status: 400}, status: 400
   end
  end

  def destroy
  end


end
