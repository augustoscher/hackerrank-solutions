def skip_animals(animals, skip)
    # Your code here
    res = []
    animals.each_with_index do |item, index|
        if (index >= skip) 
            res.push("#{index}:#{item}")
        end
    end
    return res
end

puts skip_animals(['leopard', 'bear', 'fox', 'wolf'], 2)