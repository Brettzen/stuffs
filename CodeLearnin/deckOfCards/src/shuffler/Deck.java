package shuffler;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class Deck
{
  public List getDeck()
  {
    List<String> deckNumbers =
        new ArrayList<String>(Arrays.asList("Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10",
            "Jack", "Queen", "King"));
    List<String> deckSuit =
        new ArrayList<String>(
            Arrays.asList(" of Hearts", " of Diamonds", " of Spades", " of Clubs"));

//    int suitCounter = deckSuit.size();
//    int deckCount = deckNumbers.size();
//    for (int i = 0; i < suitCounter; i++)
//    {
//      for (int j = 0; j < deckCount; j++)
//      {
//        deckComplete.add(deckNumbers.get(j) + deckSuit.get(i));
//      }
//    }


    //Using Streams :)
    final List<String> deckComplete = deckSuit.stream().flatMap((suit) -> deckNumbers.stream().map(
        (number) -> number + suit)).collect(Collectors.toList());

    //Implement Shuffle some other way...
    Collections.shuffle(deckComplete);

    return deckComplete;
  }
}
