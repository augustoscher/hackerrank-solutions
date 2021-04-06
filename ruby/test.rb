# def rot13(value)
#     res = []
#     value.each do |single|
#         res.push(single.tr('A-Za-z', 'N-ZA-Mn-za-m'))
#     end
#     return res
# end
# # puts rot13('Jul qvq gur puvpxra pebff gur ebnq?')

# puts rot13(['Gb', 'trg', 'gb', 'gur', 'bgure', 'fvqr!'])

# def full_name(*args)
#     args.reduce{ |v1, v2| v1 + ' ' + v2 }
# end

# puts full_name('Horc', 'G.', 'M.', 'Moon')

def celsiusToFahrenheit(temp)
  puts 'celsiusToFahrenheit'
end

def celsiusToKelvin(temp)
  puts 'celsiusToKelvin'
end

def kelvinToFahrenheit(temp)
  puts 'kelvinToFahrenheit'
end

def kelvinToCelsius(temp)
  puts 'kelvinToCelsius'
end

def fahrenheitToCelsius(temp)
  puts 'fahrenheitToCelsius'
end

def fahrenheitTokelvin(temp)
  puts 'fahrenheitTokelvin'
end

def convert_temp(temp, *scale)
  if (input_scale === output_scale) 
      return temp
  end
  puts x[input_scale]
  # puts input_scale
  case input_scale
  when 'celsius' then
      if output_scale === 'fahrenheit'
          return celsiusToFahrenheit(temp) 
      end
      return celsiusToKelvin(temp)
  when 'kelvin' then
      if output_scale === 'fahrenheit'
          return kelvinToFahrenheit(temp) 
      end
      return kelvinToCelsius(temp)
  when 'fahrenheit' then
      if output_scale === 'celsius'
          return fahrenheitToCelsius(temp) 
      end
      return fahrenheitToCelsiusKelvin(temp)
  end
end

# def convertCelsiusTo(t, output_scale)
#     if output_scale === 'fahrenheit'
#         return (t * (9/5)) + 32.0
#     end
#     return (t + 273.15)
# end

# def convertFahrenheitTo(t, output_scale)
#     if output_scale === 'celsius'
#         return ((t - 32) * 5/9)
#     end
#     return ((t - 32) * 5/9 + 273.15)
# end

# def convertKelvinTo(t, output_scale) 
#     if output_scale === 'celsius'
#         return (t - 273.15)
#     end
#     return ((t − 273.15) * (9/5)) + 32
# end

# def convert_temp(t, input_scale:, output_scale: 'celsius')
#     if (input_scale === output_scale) 
#         return t
#     end

#     case input_scale
#     when 'celsius' then
#         return convertCelsiusTo(t, output_scale)
#     when 'fahrenheit' then
#         return convertFahrenheitTo(t, output_scale)
#     when 'kelvin' then
#         return convertKelvinTo(t, output_scale)
#     end
# end

# puts convert_temp(0, input_scale: 'celsius', output_scale: 'kelvin')
# puts convert_temp(0, input_scale: 'celsius', output_scale: 'fahrenheit')


# def sum_terms(n)
#     t = (n**2)+1
#     (0..t).reduce(1, :+)
# end
# puts sum_terms(25)

# def strike(s)
#     "<strike>#{s}</strike>"
# end

# def mask_article(s, arr)
#     arr.each do |v| 
#         s = s.gsub(v, strike(v))
#     end
#     return s
# end

# puts mask_article("Hello World! This is crap!", ["crap", "is"])
# puts "hello".gsub(/[aeiou]/, '*')


# test = []
# test.push("creeedo")
# test.push("creeedo2")

# class Dog 
#   attr_accessor :name

#   def latir
#       "latindo"
#   end
# end

# d = Dog.new
# puts json: d