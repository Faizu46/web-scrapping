# Multi-Stage Scraper & Host

This project demonstrates how to combine Node.js for web scraping using Puppeteer with Python (Flask) for hosting content, all within a multi-stage Docker build.

## Overview

- **Node.js Scraper Stage:**  
  Uses Puppeteer with a system-installed Chromium to scrape a specified URL and extract data (e.g., page title and first heading). The output is saved as a JSON file (`scraped_data.json`).

- **Python Hosting Stage:**  
  Uses Flask to read the scraped JSON file and serve its content via an HTTP endpoint.

- **Docker Multi-Stage Build:**  
  The Dockerfile builds a lean final image by separating the scraping and hosting stages.



#How To Use My Project


#Clone My Repository
git clone https://github.com/YourUsername/multi-stage-scraper.git
cd multi-stage-scraper

#Build The Docker image/
docker buildx build --load -t multi-stage-scraper .

#Run The Container/
docker run -p 5000:5000 multi-stage-scraper

#Access the Application/
http://localhost:5000


