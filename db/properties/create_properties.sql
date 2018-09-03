INSERT INTO properties (
    id,
    name,
    description,
    address,
    city,
    state,
    zip,
    image,
    loan_amount,
    monthly_mortgage,
    desired_rent,
    recommended_rent
) VALUES (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8,
    $9,
    $10,
    $11,
    $12
);
