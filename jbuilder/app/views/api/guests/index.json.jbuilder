# json.array! @guests, :name, :age, :favorite_color

new_guests = @guests.select do |guest|
  guest.age > 40 && guest.age < 50
end

json.array! new_guests, :name
