package cardPicker;

import shuffler.Deck;

import java.util.List;

public class Pickacard
{
  public void cardPicker()
  {
    Deck deck = new Deck();

    List fullDeck = deck.getDeck();

    for (int i = 0; i <= 51; i++)
    {
      System.out.println(fullDeck.get(i));
    }
  }
}
