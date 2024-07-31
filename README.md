# Banking System Project

## Project Description

The main goal of this project is to create a simple banking system that allows users to create accounts, make deposits and withdrawals, and view transaction histories through an easy-to-use interface.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [System Architecture](#system-architecture)
- [Data Design](#data-design)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User Account Creation
- Secure Login
- Deposit and Withdrawal
- View Transaction History
- Check Account Balance

## Technologies Used

- **Frontend**: JavaScript, React.js
- **Backend**: Java, Spring Boot
- **Tools**: Git (version control), Maven (build automation)

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Java JDK](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Maven](https://maven.apache.org/)
- [Git](https://git-scm.com/)

### Steps

1. **Clone the Repository**

    ```sh
    git clone https://github.com/yourusername/banking-system.git
    ```

2. **Navigate to the Project Directory**

    ```sh
    cd banking-system
    ```

3. **Install Frontend Dependencies**

    ```sh
    cd frontend
    npm install
    ```

4. **Build and Run Backend**

    ```sh
    cd ../backend
    mvn clean install
    mvn spring-boot:run
    ```

5. **Start the Frontend**

    ```sh
    cd ../frontend
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Create a new account by providing personal details and an initial deposit.
3. Log in using your credentials.
4. Perform banking operations like making deposits, withdrawals, and viewing transaction history.

## System Architecture

The system architecture consists of a frontend developed with React.js and a backend powered by Spring Boot. The backend manages data storage, user authentication, and transaction processing.

### Architectural Diagrams

- Component Diagram
- Sequence Diagram
- Data Flow Diagram (DFD)
- Deployment Diagram
- Class Diagram
- Use Case Diagram

## Data Design

### Persistent/Static Data

- **User**
  - Attributes: UserID, Username, Password, Email, Role
  - Relationships: One-to-Many with Accounts
- **Account**
  - Attributes: AccountID, UserID, Balance
  - Relationships: Many-to-One with Users

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.


- **Name**: Gurneet Singh

