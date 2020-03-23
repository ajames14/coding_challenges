import random

suits = ['H', 'D', 'C', 'S']
numbers = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "J": 10,
  "Q": 10,
  "K": 10,
  "A": 11
}

items = numbers.items()

deck = []
for item in items:
  for suit in suits:
    deck.append((item[0]+suit, item[1]))
# print(deck)

sam_hand = []
dealer_hand = []

for i in range(2):
  sam_hand.append(random.choice(deck))
for card in sam_hand:
  deck.remove(card)
for i in range(2):
  dealer_hand.append(random.choice(deck))

# sam_score = sam_hand[0][1] + sam_hand[1][1]
sam_scores = [x[1] for x in sam_hand]
dealer_scores = [x[1] for x in dealer_hand]


if sum(sam_scores) == 21:
  winner = "Sam"
  print("Blackjack - Sam Wins")
  print("Sam's Score: "+str(sum(sam_scores)))
  print("Dealer's Score: "+str(sum(dealer_scores)))
elif sum(dealer_scores) == 21:
  winner = "Dealer"
  print("Blackjack - Dealer Wins")
  print("Sam's Score: "+str(sum(sam_scores)))
  print("Dealer's Score: "+str(sum(dealer_scores)))
else:
  # print('Sams go')
  while sum(sam_scores) < 17:
    card = random.choice(deck)
    sam_scores.append(card[1])
    deck.remove(card)
  if sum(sam_scores) == 21:
    winner = "Sam"
    print(winner+" is the winner!")
    print("Sam's Score: "+str(sum(sam_scores)))
    print("Dealer's Score: "+str(sum(dealer_scores)))
  elif sum(sam_scores) > 21:
    winner = "Dealer"
    print(winner+" is the winner!")
    print("Sam's Score: "+str(sum(sam_scores)))
    print("Dealer's Score: "+str(sum(dealer_scores)))
  else:
    while sum(dealer_scores) <= sum(sam_scores):
      card = random.choice(deck)
      dealer_scores.append(card[1])
      deck.remove(card)
    if sum(dealer_scores) == 21 or sum(dealer_scores) > sum(sam_scores) and sum(dealer_scores) < 21:
      winner = "Dealer"
      print(winner+" is the winner!")
      print("Sam's Score: "+str(sum(sam_scores)))
      print("Dealer's Score: "+str(sum(dealer_scores)))
    elif sum(dealer_scores) > 21 or sum(dealer_scores) < sum(sam_scores):
      winner = "Sam"
      print(winner+" is the winner!")
      print("Sam's Score: "+str(sum(sam_scores)))
      print("Dealer's Score: "+str(sum(dealer_scores)))
    else:
      print("It's a Draw")
      print("Sam's Score: "+str(sum(sam_scores)))
      print("Dealer's Score: "+str(sum(dealer_scores)))
