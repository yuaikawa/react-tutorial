import React, { Component } from "react";

import SearchForm from "./SearchForm";
import GeocodeResult from "./GeoceodeResult";
import Map from "./Map";
import HotelsTable from "./HotelsTable";

import { geocode } from "../domain/Geocoder";
import { searchByLocation } from "../domain/HotelRepository";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: 35.6585805,
        lng: 139.7454329
      }
    };
  }

  // エラーメッセージの共通化
  setErrorMessage(message) {
    this.setState({
      address: message,
      location: {
        lat: 0,
        lng: 0
      }
    });
  }

  // 検索処理を担う
  handlePlaceSubmit(place) {
    geocode(place)
      .then(({ status, address, location }) => {
        switch (status) {
          case "OK":
            this.setState({ address, location });
            return searchByLocation(location);
          case "ZERO_RESULTS":
            this.setErrorMessage("結果が見つかりませんでした");
            break;
          default:
            this.setErrorMessage("予期せぬエラーです");
        }
        return [];
      })
      .then(hotels => {
        this.setState({ hotels });
      })
      .catch(() => {
        this.setErrorMessage("通信に失敗しました");
      });
  }

  // 各Componentを呼ぶ
  render() {
    return (
      <div className="app">
        <h1 className="app-title">ホテル検索</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <div className="result-area">
          <Map location={this.state.location} />
          <div className="result-right">
            <GeocodeResult
              address={this.state.address}
              location={this.state.location}
            />
            <h2>ホテル検索結果</h2>
            <HotelsTable hotels={this.state.hotels} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
