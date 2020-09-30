import React from "react";
import { ActivityIndicator } from "react-native";

import { List, ListItem } from "../components/List";
import { geoFetch } from 'geocache/App/util/api';

class ListScreen extends React.Component {
  state = {
    loading: true,
    list: []
  };

  componentDidMount() {
    geoFetch('/geocache/list')
      .then(res => {
        console.log('response ', res);
        this.setState({
          loading: false,
          list: res.result,
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" />;
    }

    return (
      <List
        data={this.state.list}
        renderItem={({ item, index }) => (
          <ListItem
            title={item.title}
            isOdd={index % 2}
            onPress={() => this.props.navigation.navigate("Details", { item })}
          />
        )}
      />
    );
  }
}

export default ListScreen;
