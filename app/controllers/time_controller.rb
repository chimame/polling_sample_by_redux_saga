class TimeController < ApplicationController
  def index
    render json: {server_time: Time.now.strftime("%Y/%m/%d %H:%M:%S")}
  end
end
