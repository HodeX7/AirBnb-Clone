import React from "react";
import "./SearchPage.css";
import {Button} from '@material-ui/core'
import SearchResult from './SearchResult'
import Header from "./Header";

function SearchPage() {
  return (
    <div className="searchPage">
      <Header />
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                loc="Private room in center of Mumbai"
                title="Stay at this spacious Edwardian House"
                desc="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="₹3,000 / night"
                total="₹11,700 total"
            />
            <SearchResult
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                loc="Private room in center of Mumbai"
                title="Independant luxury studio apartment"
                desc="2 guest · 3 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen"
                star={4.3}
                price="₹4,000 / night"
                total="₹1,570 total"
            />

            <SearchResult
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                loc="Private room in center of Mumbai"
                title="Mumbai Studio Apartments"
                desc="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                star={3.8}
                price="₹3,500 / night"
                total="₹20,700 total"
            />
            <SearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                loc="Private room in center of Mumbai"
                title="30 mins to Oxford Street, Excel Mumbai"
                desc="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="₹5,500 / night"
                total="₹32,000 total"
            />
            <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-Mumbai.jpg"
                loc="Private room in center of Mumbai"
                title="Spacious Peaceful Modern Bedroom"
                desc="3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="₹6,000 / night"
                total="₹45,000 total"
            />
            <SearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                loc="Private room in center of Mumbai"
                title="The Blue Room In Mumbai"
                desc="2 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Washing Machine"
                star={4.23}
                price="₹6,500 / night"
                total="₹48,000 total"
            />
            <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                loc="Private room in center of Mumbai"
                title="5 Star Luxury Apartment"
                desc="3 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="₹9,000 / night"
                total="₹65,000 total"
            />
    </div>
  );
}

export default SearchPage;
