import { buildEventWorldTimes } from "lib/eventWorldTimes";

export {
  eventHasWorldTimes,
  withEventWorldTimeFaq,
} from "lib/eventWorldTimes";

/**
 * Static "start time around the world" table for one event.
 * Rendered on the server from event.startDate. Returns nothing when the
 * start is missing, date-only, or already in the past.
 */
export default function EventWorldTimes({ event }) {
  const model = buildEventWorldTimes(event);
  if (!model) return null;

  const caption = model.eventName
    ? `Local start time for ${model.eventName} in cities around the world`
    : "Local start time in cities around the world";

  return (
    <section className="event-world-times" aria-labelledby="event-world-times-heading">
      <h2 id="event-world-times-heading">What time is it in your country?</h2>
      <p id="event-world-times-note" className="event-world-times__note">
        Times follow the organiser&apos;s published schedule and can change.
      </p>
      <div className="event-world-times__scroll">
        <table aria-describedby="event-world-times-note">
          <caption className="event-world-times__caption">{caption}</caption>
          <thead>
            <tr>
              <th scope="col">Place</th>
              <th scope="col">Local start</th>
            </tr>
          </thead>
          <tbody>
            {model.rows.map((row) => (
              <tr key={row.id}>
                <th scope="row">{row.label}</th>
                <td>
                  {row.dateText}, {row.timeText}
                  {row.dayShift ? (
                    <span className="event-world-times__shift"> ({row.dayShift})</span>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
