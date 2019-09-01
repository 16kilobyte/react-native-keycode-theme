import React from 'react';

import { RoomsProps } from './type';
import SafeArea from '../../components/SafeArea';
import RoomList from '../../components/RoomList';
import { mockData } from '../../data';

class Rooms extends React.Component<RoomsProps> {
  constructor(props: RoomsProps) {
    super(props);
  }

  public render() {
    return (
      <SafeArea>
        <RoomList rooms={mockData} />
      </SafeArea>
    );
  }
}

export default Rooms;
