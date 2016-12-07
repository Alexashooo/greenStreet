class StreetprofilesController < ApplicationController

  def index
    @streetprofiles = Streetprofile.all
    render json: @streetprofiles, status: 200
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
    @streetprofile.update_attributes(greenstreet_params)

    respond_to do |format|
      if
        format.json { render json: @streetprofile.errors, status: :unprocessable_entity}
      end
    end
  end


  def create
    @streetprofile = Streetprofile.new(greenstreet_params)

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

  private

  def greenstreet_params
    params.permit(:user_id, :name, :street_configuration)
  end


end
