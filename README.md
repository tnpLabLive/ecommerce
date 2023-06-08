# ecommerce

# Database

```
host: 'localhost',
user: 'root',
password: 'Your password',
database: 'ecom'

```

# create table

```
CREATE TABLE user(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    role ENUM('user', 'admin', 'staff'),
    business_id VARCHAR(255) UNIQUE,
    status ENUM('activate', 'deactivate'),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE store (
    id varchar(255) PRIMARY KEY,
    store_name VARCHAR(255),
    store_img VARCHAR(255) ,
    FK_business_id VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (FK_business_id) REFERENCES user(business_id)
);


CREATE TABLE store_staff (
    id varchar(255) PRIMARY KEY,
    FK_store_id  varchar(255),
    FK_staff_id  varchar(255),
    FK_business_id VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (FK_staff_id) REFERENCES user(id),
    FOREIGN KEY (FK_store_id) REFERENCES store(id),
    FOREIGN KEY (FK_business_id) REFERENCES user(business_id)
)


```
