class Api::V1::DecksController < ApplicationController
  skip_before_action :verify_authenticity_token
  protect_from_forgery except: :destroy, unless: -> { request.format.json? }

  def index
    if current_user
      render :json => {"decks" => current_user.decks}
    else
      render :json => {"signed_in" => false}
    end
  end

  def show
  end


  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end


end
