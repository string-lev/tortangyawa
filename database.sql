-- Create database
CREATE DATABASE IF NOT EXISTS torta_db;
USE torta_db;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255),
    best_seller BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample products
INSERT INTO products (name, description, price, image, best_seller) VALUES
('Classic Torta', 'Traditional Filipino torta with fresh ingredients', 25.00, 'images/classic-torta.jpg', TRUE),
('Ham and Cheese Torta', 'Delicious ham and cheese combination', 30.00, 'images/ham-cheese-torta.jpg', TRUE),
('Chicken Torta', 'Tender chicken filling with special sauce', 28.00, 'images/chicken-torta.jpg', FALSE),
('Beef Torta', 'Savory beef torta with vegetables', 32.00, 'images/beef-torta.jpg', TRUE),
('Vegetable Torta', 'Healthy vegetable option for all', 22.00, 'images/vegetable-torta.jpg', FALSE);
