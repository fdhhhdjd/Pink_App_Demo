CREATE TABLE users (
    id BIGINT PRIMARY KEY,
    fullname TEXT NOT NULL DEFAULT 'anonymous',
    email VARCHAR(30) NOT NULL UNIQUE,
    avatar VARCHAR(150) NOT NULL,
    password VARCHAR(150) NOT NULL,
    address TEXT NOT NULL DEFAULT 'unknown',
    role SMALLINT NOT NULL,
    registration_date TIMESTAMP WITHOUT TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
);
-- user
-- user@gmail.com/user@password
-- staff
-- staff@gmail.com/staff@password
-- cms
-- cms@gmail.com/cms@password

INSERT INTO users (id, fullname, email, avatar, password, address, role) VALUES
(1, 'Cristiano Ronaldo ', 'user@gmail.com', 'https://res.cloudinary.com/taidev/image/upload/v1719283693/user_apvwjf.jpg', '$2b$10$VeXVS4360Ue//uN5U8RZfeg04CFjeacMJ0FK857exRrXnc8bnZcme', '123 Main St, Anytown, USA', 10),
(2, 'Lionel Messi ', 'staff@gmail.com', 'https://res.cloudinary.com/taidev/image/upload/v1719283692/staff_icit7q.jpg', '$2b$10$63DRkV2P9IEegm1fgx2/p.zr5CRuA4BTL7m3aFhD/XQHIkV6UUnbO', '456 Elm St, Sometown, USA', 20),
(3, 'Mesut Ozil', 'cms@gmail.com', 'https://res.cloudinary.com/taidev/image/upload/v1719283692/cms_my07gu.jpg', '$2b$10$ccqC6PqRf/9BfknPW9QhLO0DR3XE9MEYwcsHwazD7lOn35IyCHZTq', '789 Pine St, Yourtown, USA', 30);

