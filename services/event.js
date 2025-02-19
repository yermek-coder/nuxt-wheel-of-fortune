// @ts-check

// Simplified Event Service (Local Event Bus)
export class EventService {
    constructor() {
        // Init
        this.id = 0;
        this.listeners = [];
    }

    // Subscribe to an event
    on(channel, action) {
        // Create a listener
        const listener = { id: ++this.id, channel, action };
        this.listeners.push(listener);

        // Return a function to unsubscribe
        return () => this.off(listener.id);
    }

    // Unsubscribe from an event
    off(id) {
        this.listeners = this.listeners.filter(listener => listener.id !== id);
    }

    // Publish an event locally
    publish(channel, payload) {
        this.listeners
            .filter(listener => listener.channel === channel)
            .forEach(listener => listener.action({ channel, payload, local: true }));
    }

    // Clear all listeners
    clear() {
        this.listeners = [];
    }
}

// Export a singleton instance of the EventService
export default new EventService();