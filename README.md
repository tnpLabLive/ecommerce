# ecommerce

# Database
host: 'localhost',
user: 'root',
password: 'Your password',
database: 'ecom'

# create table

```
CREATE TABLE user(
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255),
  role VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  status VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE store (
  id varchar(255) PRIMARY KEY,
  store_name VARCHAR(255),
  FK_user_id  varchar(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (FK_user_id) REFERENCES user(id)
)

CREATE TABLE prod_cat (
  prod_cat_id VARCHAR(255) PRIMARY KEY,
  prod_cat_name VARCHAR(255),
  FK_store_id VARCHAR(255),
  FK_user_id VARCHAR(255),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (FK_store_id) REFERENCES store(id),
  FOREIGN KEY (FK_user_id) REFERENCES user(id)
);

```
