import React, { Component } from "react";
import axios from "axios";

import SearchForm from "./SearchForm";
import GeocodeResult from "./GeoceodeResult";
import Map from "./Map";

const GECODE_URL = "https://maps.googleapis.com/maps/api/geocode/json";
const API_KEY = "";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // エラーメッセージの共通化
  setErrorMessage(message) {
    this.setState({
      address: message,
      lat: 0,
      lng: 0
    });
  }

  // 検索処理を担う
  handlePlaceSubmit(place) {
    axios
      .get(GECODE_URL, { params: { address: place, key: API_KEY } })
      .then(results => {
        const data = results.data;
        const result = data.results[0];
        switch (data.status) {
          case "OK":
            const location = result.geometry.location;
            this.setState({
              address: result.formatted_address,
              lat: location.lat,
              lng: location.lng
            });
            break;
          case "ZERO_RESULTS":
            this.setErrorMessage("結果が見つかりませんでした");
            break;
          default:
            this.setErrorMessage("予期せぬエラーです");
        }
      })
      .catch(error => {
        this.setErrorMessage("通信に失敗しました");
      });
  }

  // 各Componentを呼ぶ
  render() {
    return (
      <div>
        <h1>緯度経度サービス</h1>
        <SearchForm onSubmit={place => this.handlePlaceSubmit(place)} />
        <GeocodeResult
          address={this.state.address}
          lat={this.state.lat}
          lng={this.state.lng}
        />
        <Map lat={this.state.lat} lng={this.state.lng} />
      </div>
    );
  }
}
export default App;
