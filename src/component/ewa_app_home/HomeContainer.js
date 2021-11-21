import React from 'react'
import UserCard from './UserCard'
import EwaRanking from './EwaRanking'
import BeansOrderContainer from './BeansOrderContainer'
import SpecialOrderContainer from './SpecialOrderContainer'

const HomeContainer = () => {
    return (
          
        <div className="home_container">
        <UserCard />
        <EwaRanking />
        <BeansOrderContainer />
        <SpecialOrderContainer />

  </div>
    )
}

export default HomeContainer
