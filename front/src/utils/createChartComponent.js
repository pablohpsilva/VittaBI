import React from 'react'
import Chart from '../components/CardChart'

export default (key, name, title, subtitle, dataKeyX, dataKeyY, data, type, className = 'Chart-card-wrapper') => {
  if (!data || !data.length) {
    return null
  }
  return (
    <Chart
      className={className}
      key={key}
      name={name}
      title={title}
      subtitle={subtitle}
      dataKeyX={dataKeyX}
      dataKeyY={dataKeyY}
      data={data}
      type={type}
    />
  )
}
