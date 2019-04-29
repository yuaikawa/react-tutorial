import React, { Component } from "react";

import SearchForm from "./SearchForm";
import GeocodeResult from "./GeoceodeResult";
import Map from "./Map";

import { geocode } from "../domain/Geocoder";

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
            break;
          case "ZERO_RESULTS":
            this.setErrorMessage("結果が見つかりませんでした");
            break;
          default:
            this.setErrorMessage("予期せぬエラーです");
        }
      })
      .catch(() => {
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
          location={this.state.location}
        />
        <Map location={this.state.location} />
      </div>
    );
  }
}
export default App;
