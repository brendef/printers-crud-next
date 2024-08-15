
An app built in Next 13

## Tech Stack

**Client:** Next.js 13, TailwindCSS

**Server:** GoLang

**Cloud:** AWS RDS, AWS EC2

**IDE/Editor:** VIM (Lunar Vim - NVIM), VS Code


## Features

- Create / Add New 
- View All 
- Filter  By Status (Active/Inactive)
- Search  By Name
- Edit  (Change name and/or Status)
- Responsive Design


## Lessons Learned

1. Next 13 was different. Having bootstraped and built many next apps in the past. I had to get used to the new features in Next 13. I really enjoyed using Next 13 and prefer it to previous versions. 

2. Found an amazing process manager for node js called pm2. 



## Run Locally

Clone the project

```bash
  git clone https://github.com/brendef/--crud.git
```

Go to the project directory

```bash
  cd --crud
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Screenshots

While the Home Screen is loading. Cards with a pulsing skeleton text will display to show the user that the data is loading:

![Skeleton Cards On Home Screenshot](https://github.com/brendef/printers-crud-next/blob/main/screenshots/skeleton-home.png?raw=true)

Home Screen Where All  Are Displayed:

The home screen contains the search bar that searches for the  by name and displays them only. 

The home screen also contains a toggle button that allows a user to only show active or inactive . There is a dedicated checkbox that can be used to enable and disable this feature. 

The home screen is responsive and looks great on mobile.

![Home Screen Screenshot](https://github.com/brendef/printers-crud-next/blob/main/screenshots/home.png?raw=true)

Home Screen With Filter To Only Show Inactive :

![Home Screen with inactive filter turned on](https://github.com/brendef/printers-crud-next/blob/main/screenshots/filter-active.png?raw=true)

Home Screen With Filter To Only Show Active :

![Home Screen with active filter turned on](https://github.com/brendef/printers-crud-next/blob/main/screenshots/filter-active.png?raw=true)

Edit Printer Screen \
(PLEASE NOTE: in order to prevent accidental deleting of a printer. The "Remove Printer" button needs to be double clicked for a printer to be removed):

![Screenshot of the Edit Printer Screen](https://github.com/brendef/printers-crud-next/blob/main/screenshots/edit-printer.png?raw=true)

While The Printer Info Screen is loading. A similar pulsing skeleton text to the homescreen will be displayed to show the user that the data is loading:

![Skeleton Text in View Printer Screenshot](https://github.com/brendef/printers-crud-next/blob/main/screenshots/skeleton-view.png?raw=true)

Add New Printer Screen:

![Screenshot of the Add New Printer Screen](https://github.com/brendef/printers-crud-next/blob/main/screenshots/new-printer.png?raw=true)

View Printer Information Screen:

![Screen shot of the printer information page](https://github.com/brendef/printers-crud-next/blob/main/screenshots/view-printer.png?raw=true)

The Search Bar In Action:

![A screenshot of the Search Bar being used](https://github.com/brendef/printers-crud-next/blob/main/screenshots/search-printer.png?raw=true)


## Related

The rest api backend that this project connects to is built in GoLang. To see the code and install locally see the repo bellow.

[Printer Go Lang API](https://github.com/brendef/-printer-api.git)


## FAQ

#### Why does this not work over SSL/HTTPS

I just need to install an SSL Certificate and configure nginx or apache then it should be good to go.

#### Why Next 13

Next is my favourite Framework. I used next 13 because I was looking for a good reason to try out the new features. 

#### Why AWS EC2

My goal was to get something up and running ASAP. EC2s are super simple make a perfect dev environmnet. I do belive a serverless product such as *Amplify* for the front end and *lambda* would have been better. I will migrate this later one to use these technologies for sure!

## How can this project be improved

There are so many way this project could be improved. Here are four cool features that could still be implemented:
1. Automatically detect  on a newtwork and display them on screen
2. Show or Hide , instead of deleting them from the database
3. Show printer activity in addition and other information to state. (eg. "printing" or "low on ink")
4. Display success and failure messages on the screen. This is for the user to have more information about what is going on.

## Feedback

I really appreciate feedback. Please reach out to me at brendan.defaria@gmail.com


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@brendef](https://www.github.com/brendef)


## 🚀 About Me
I am a developer who is looking to one day create complex scripts and machine learning algorithms.


## 🛠 Skills
Javascript, Python, MySql, NoSql, PHP, Docker, AWS

