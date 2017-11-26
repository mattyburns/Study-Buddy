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
    if current_user
      deck = Deck.find(params[:id])
      render :json => {"deck" => deck}
    else
      render :json => {"signed_in" => false}
    end
  end


  def create
    deck = JSON.parse(request.body.read)
    new_deck = Deck.create(
      name: deck["name"],
      description: deck["description"],
      user_id: deck["userId"]
    )
    render json: new_deck
  end

  def edit
  end

  def update
  end

  def destroy
  end


end
