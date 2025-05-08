
script.js
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Segoe UI", sans-serif;
    background-color: #fff;
    color: #333;
  }
  
  .container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
  }
  
  header {
    background: #fff;
    padding: 20px 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .nav .logo {
    font-weight: bold;
    font-size: 20px;
  }
  
  .nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  .nav ul li a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }
  
  .hero {
    background: linear-gradient(to right, #ffe9d6, #d6fff2);
    padding: 60px 0;
  }
  
  .hero-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .hero-content .text {
    flex: 1;
  }
  
  .hero-content h1 {
    font-size: 40px;
    margin-bottom: 20px;
  }
  
  .hero-content h1 span {
    color: #ff7e5f;
  }
  
  .hero-content p {
    font-size: 16px;
    margin-bottom: 20px;
    max-width: 500px;
  }
  
  .hero-content button {
    background-color: #ff7e5f;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .hero-img img {
    max-width: 300px;
    border-radius: 10px;
  }
  
  .categories {
    padding: 60px 0;
    background-color: #f9f9f9;
    text-align: center;
  }
  
  .categories h2 {
    font-size: 32px;
    margin-bottom: 10px;
  }
  
  .categories p {
    font-size: 16px;
    color: #666;
    margin-bottom: 40px;
  }
  
  .category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
  }
  
  .card {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 1px 5px rgba(0,0,0,0.1);
    font-weight: bold;
  }
  
  .card small {
    display: block;
    color: #999;
    margin-top: 8px;
  }
  
  .card.active {
    border: 2px solid #ff7e5f;
    color: #ff7e5f;
  }
  
  footer {
    background: #fff;
    padding: 40px 0;
    border-top: 1px solid #eee;
  }
  
  .footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .footer div {
    flex: 1;
    min-width: 200px;
  }
  
  .footer h4 {
    margin-bottom: 10px;
  }
  
  .footer ul {
    list-style: none;
    padding: 0;
  }
  
  .footer ul li a {
    text-decoration: none;
    color: #555;
  }