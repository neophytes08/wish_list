class ListsController < ApplicationController 

  def index

  end

  def getList
    @lists = List.all.order('created_at desc')

    render json: @lists.to_json(except: [:created_at, :updated_at]), status: :ok
  end

  def show

  end

  def create
    @list = List.new(list_param)

    if @list.save
      render json: { status: "ok" }
    else
      render json: { status: :unprocessable_entity }
    end
  end

  def update
    @list = List.find(params[:id])
    puts @list
      if @list.update(list_param)
        render json: { status: "ok" }
      else
        render json: { status: :unprocessable_entity }
      end
  end

  def destroy
    list = List.find(params[:id])
    puts list
    list.destroy
    render json: { status: "ok" }
  end

  private

  def list_param
      params.require(:list).permit(:list_name, :list_description, :image)
  end

end
