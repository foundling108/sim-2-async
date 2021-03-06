create table properties (
	id SERIAL,
	name VARCHAR(50),
	description VARCHAR(200),
	address VARCHAR(80),
	city VARCHAR(80),
	state VARCHAR(50),
	zip VARCHAR(20),
	image VARCHAR(100),
	loan_amount VARCHAR(50),
	monthly_mortgage VARCHAR(50),
	desired_rent VARCHAR(50),
	recommended_rent VARCHAR(50)
	user_id INT,
	FOREIGN KEY (user_id) REFERENCES users(user_id)
);

