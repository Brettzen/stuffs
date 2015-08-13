package cardPicker;

import shuffler.Deck;

import java.util.List;

public class Pickacard
{
  int timesThrough = 1;
  public void cardPicker()
  {

    Deck deck = new Deck();

    List fullDeck = deck.getDeck();

    if (timesThrough == 1) {
      for (int i = 0; i <= 51; i++) {
        System.out.println(fullDeck.get(i));
      }
    }
    
    List reshuffledDeck = deck.reshuffle();

    timesThrough++;
    for (int i = 0; i < reshuffledDeck.size() - 1; i++) {
      if (timesThrough == 2) {
        System.out.println("---- " + reshuffledDeck.get(i));
      } else if (timesThrough == 3) {
        System.out.println(">>>> " + reshuffledDeck.get(i));
      }
    }

    if (timesThrough == 2) {
      cardPicker();
    }
  }
}
