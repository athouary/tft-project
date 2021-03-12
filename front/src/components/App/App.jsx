import React from 'react'
import { Avatar, List } from 'antd'

const App = ({ matchList }) => {
  const currentPlayerId = 'k63C7wI2DRBePNMwt5TOpO6xcMDBrcnHJzmtaNDUUWaoNx5uGZL7OikCFzmFQ0JiKjmqt7mDz6RGlA' // TODO make dynamic
  return (
    <List>
      {
        matchList.map(match => {
          const currentPlayerInfo = match.info.participants.find(participant => participant.puuid === currentPlayerId)
          const matchDate = new Date(match.info.game_datetime)
          const matchDuration = Math.round(match.info.game_length / 60)
          return (
            <List.Item key={match.metadata.match_id} >
              <List.Item.Meta
                avatar={<Avatar>{currentPlayerInfo.placement}</Avatar>}
                title={`${matchDate.toLocaleString()}`}
                description={`${matchDuration} minutes`}
              />
            </List.Item>
          )
        })
      }
    </List>
  )
}

export default App
