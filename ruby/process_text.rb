def process_text(arr)
    arr.map{|i| "#{i}".strip }.join(" ")
end

puts process_text(["Hi, \n", " Are you having fun?    "])
# "Hi, Are you having fun?"