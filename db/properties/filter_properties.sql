SELECT *
FROM properties
WHERE seller_id = $1 
AND desired_rent >= $2;