import { useState } from 'react'
import './exploreplan.css'

const plans = [
  {
    id: 1,
    name: 'Basic Plan',
    features: ['10GB Storage', 'Email Support', 'Limited Access', '1 User'],
    description: 'This is ideal for individuals just getting started.',
  },
  {
    id: 2,
    name: 'Pro Plan',
    features: ['100GB Storage', 'Priority Support', 'Full Access', '5 Users'],
    description: 'Perfect for professionals and small teams.',
  },
  {
    id: 3,
    name: 'Business Plan',
    features: ['1TB Storage', '24/7 Support', 'Advanced Tools', '20 Users'],
    description: 'Designed for growing businesses.',
  },
  {
    id: 4,
    name: 'Enterprise Plan',
    features: [
      'Unlimited Storage',
      'Dedicated Manager',
      'Custom Tools',
      'Unlimited Users',
    ],
    description: 'Best for large enterprises with custom needs.',
  },
]

function ExplorePlans() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)

  const handleClick = (id: number) => {
    setSelectedPlan(id)
    console.log(`Clicked plan ID: ${id}`)
  }

  return (
    <div className="explore-page">
      <h2>Explore Plans</h2>
      <div className="plans-container">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`plan-card ${selectedPlan === plan.id ? 'active' : ''}`}
            onClick={() => handleClick(plan.id)}
          >
            <h3>{plan.name}</h3>
            <div className="features">
              {plan.features.map((feature, index) => (
                <button key={index} className="feature-button">
                  {feature}
                </button>
              ))}
            </div>
            <p className="description">{plan.description}</p>
            <button className="buy-now">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExplorePlans
