---
layout: default
---

# Welcome to my blog!

I will document what I learn, so that hopefully you learn something about programming and the subjects I'm covering.
As I'm interested in many different fields, we will jump around a bit. First post will be a short recap of what I've learned so far.
This will give you a great start in becoming a Python master. The second post will be about creating a game in Python, 
specifically how to create a model of a card game. The card game is boerenbridge(farmerbridge), an easy version of bridge. 
Both posts will be coming soon! 

Also work still has to be done on the website. I made it almost from scratch. I know it is still ugly, but no fancy templates were used and colouring is
not my strongest point haha. I will manage though.  

Below you see a sample code of the boerenbridge model. The full code can be found on my Github page. 
The link is on the left side of the page, next to the linkedIn block.
   

```python
suit_names = ['Clubs', 'Diamonds', 'Hearths', 'Spades']
rank_names = [None, None, '2', '3', '4', '5', '6', '7',
              '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
    
    def __init__(self, suit=0, rank=2):
        self.suit = suit
        self.rank = rank
        
    def __str__(self):
        if self.suit is not None:
            return '%s of %s' % (Card.rank_names[self.rank],
                                 Card.suit_names[self.suit])
        else: return 'no trump'
        
    def __lt__(self, other):
        t1 = self.rank, self.suit
        t2 = other.rank, other.suit
        return t1 < t2
    
    def has_suit(self, suit):
        return self.suit == suit
```

