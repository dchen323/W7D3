json.pokemon do
  json.extract! @pokemon, :id, :name, :attack,:defense,:moves, :poke_type, :image_url
  json.items_id @pokemon.items.pluck(:id)
end

json.items @pokemon.items do |item|
  json.set! item.id do
    json.extract! item, :id, :name, :pokemon_id, :price, :happiness, :image_url
  end
end
