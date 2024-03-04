export enum TajweedWordType {
  none = "",
  tajweed = "tajweed",
  span = "span",
}
export enum TajweedClass {
  "ham_wasl" = "ham_wasl",
  "laam_shamsiyah" = "laam_shamsiyah",
  "madda_normal" = "madda_normal",
  "madda_permissible" = "madda_permissible",
  "end" = "end",
  "madda_necessary" = "madda_necessary",
  "idgham_wo_ghunnah" = "idgham_wo_ghunnah",
  "slnt" = "slnt",
  "ghunnah" = "ghunnah",
  "qalaqah" = "qalaqah",
  "ikhafa" = "ikhafa",
  "madda_obligatory" = "madda_obligatory",
  "idgham_ghunnah" = "idgham_ghunnah",
  "ikhafa_shafawi" = "ikhafa_shafawi",
  "idgham_shafawi" = "idgham_shafawi",
  "iqlab" = "iqlab",
  "idgham_mutajanisayn" = "idgham_mutajanisayn",
  "idgham_mutaqaribayn"= "idgham_mutaqaribayn"
}

export type TSimple = {
  data: string;
  className: string;
  type: TajweedWordType.none;
};
export type Tajweed = {
  data: string;
  className: string;
  type: TajweedWordType.tajweed;
};
export type TSpan = {
  data: string;
  className: string;
  type: TajweedWordType.span;
};

export class CTajweed {
  public static parseTajweedString(
    input: string,
  ): Array<TSimple | Tajweed | TSpan> {
    const result: Array<TSimple | Tajweed | TSpan> = [];
    let currentIndex = 0;

    while (currentIndex < input.length) {
      const openTagIndex = input.indexOf("<", currentIndex);
      if (openTagIndex === -1) {
        // No more tags, add the remaining text as a simple
        const remainingText = input.substring(currentIndex);
        if (remainingText !== "") {
          result.push({
            data: remainingText,
            className: "",
            type: TajweedWordType.none,
          });
        }
        break;
      }

      const closeTagIndex = input.indexOf(">", openTagIndex);
      if (closeTagIndex === -1) {
        // Malformed tag, skip to the next character
        currentIndex++;
        continue;
      }

      // Add the text before the tag as a simple
      const beforeTagText = input.substring(currentIndex, openTagIndex);
      if (beforeTagText !== "") {
        result.push({
          data: beforeTagText,
          className: "",
          type: TajweedWordType.none,
        });
      }

      const tagContent = input.substring(openTagIndex + 1, closeTagIndex);
      const tagParts = tagContent.split(" ");

      if (tagParts && (tagParts[0] === "tajweed" || tagParts[0] === "span")) {
        const classAttribute = tagParts
          ?.find((part) => part.startsWith("class="))
          ?.split("=")[1]
          ?.replace(/["']/g, "");
        const tagData = input.substring(
          closeTagIndex + 1,
          input.indexOf(`</${tagParts[0]}>`, closeTagIndex),
        );
        result.push({
          data: tagData,
          className: classAttribute || "",
          type:
            tagParts[0] === "tajweed"
              ? TajweedWordType.tajweed
              : TajweedWordType.span,
        });
        currentIndex =
          input.indexOf(`</${tagParts[0]}>`, closeTagIndex) +
          tagParts[0].length +
          3;
      } else {
        // Unknown tag, skip to the next character
        currentIndex++;
      }
    }

    return result;
  }
}
